import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      variant="ghost"
      onClick={() => navigate(-1)}
      className="mb-6 -ml-2 hover:bg-accent"
    >
      <ArrowLeft className="w-4 h-4 mr-2" />
      Voltar
    </Button>
  );
};

export default BackButton;
