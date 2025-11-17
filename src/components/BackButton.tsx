import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <Button
      variant="ghost"
      onClick={handleBack}
      className="mb-6 -ml-2 hover:bg-accent"
    >
      <ArrowLeft className="w-4 h-4 mr-2" />
      Voltar
    </Button>
  );
};

export default BackButton;
