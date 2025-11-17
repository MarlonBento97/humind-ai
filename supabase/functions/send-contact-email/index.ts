import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message }: ContactEmailRequest = await req.json();

    console.log("Received contact form submission:", { name, email, subject });

    // Validate inputs
    if (!name || name.trim().length === 0 || name.length > 100) {
      throw new Error("Nome inválido");
    }
    if (!email || email.trim().length === 0 || email.length > 255 || !email.includes("@")) {
      throw new Error("Email inválido");
    }
    if (!message || message.trim().length === 0 || message.length > 1000) {
      throw new Error("Mensagem inválida");
    }

    // Send email to company
    const companyEmailResponse = await resend.emails.send({
      from: "humind.ia <onboarding@resend.dev>",
      to: ["marlon.bento@humindia.com.br"],
      subject: `[Contato Site] ${subject || "Nova mensagem"}`,
      html: `
        <h2>Nova mensagem de contato do site</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Assunto:</strong> ${subject || "Não informado"}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p><small>Enviado automaticamente pelo formulário de contato do site humind.ia</small></p>
      `,
    });

    console.log("Company email sent successfully:", companyEmailResponse);

    // Send confirmation email to customer
    const customerEmailResponse = await resend.emails.send({
      from: "humind.ia <onboarding@resend.dev>",
      to: [email],
      subject: "Recebemos sua mensagem!",
      html: `
        <h1>Obrigado por entrar em contato, ${name}!</h1>
        <p>Recebemos sua mensagem e retornaremos o mais breve possível.</p>
        <p><strong>Sua mensagem:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p>Atenciosamente,<br>Equipe humind.ia</p>
        <p><small>WhatsApp: (47) 999367017 | Email: marlon.bento@humindia.com.br</small></p>
      `,
    });

    console.log("Customer confirmation email sent successfully:", customerEmailResponse);

    return new Response(
      JSON.stringify({ 
        success: true,
        message: "Email enviado com sucesso" 
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        success: false,
        error: error.message || "Erro ao enviar email"
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
