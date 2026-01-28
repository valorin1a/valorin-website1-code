import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const VATRiskChecklist = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/tax-center/vat/risk-radar", { replace: true });
  }, [navigate]);

  return null;
};

export default VATRiskChecklist;