import { useEffect, useState } from "react";
import { useAuthContext } from "../../../hooks/useAuthContext";

type IForm = {
  name: string;
  email: string;
  password: string;
  confirmedPassword: string;
};

type IFormMode = "login" | "register";

export function useAuthFormHook() {
  const { login, createUser } = useAuthContext();

  const [mode, setMode] = useState<IFormMode>("login");
  const [error, setError] = useState("");

  const [form, setForm] = useState<IForm>({
    name: "",
    email: "",
    password: "",
    confirmedPassword: "",
  });

  function handleChange(field: keyof IForm, value: string) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function handleModeChange(mode: IFormMode) {
    setMode(mode);
  }

  async function handleSubmit() {
    setError("");

    try {
      if (mode === "login") return await login(form.email, form.password);

      if (form.password !== form.confirmedPassword) {
        setError("As senhas não são iguais");
        return;
      }

      await createUser({
        name: form.name,
        email: form.email,
        password: form.password,
      } as any);
    } catch (err: any) {
      console.log(err);
      setError(err?.message || "Erro ao autenticar");
    }
  }

  function resetForm() {
    setForm({
      name: "",
      email: "",
      password: "",
      confirmedPassword: "",
    });
    setError("");
  }

  useEffect(() => {
    resetForm();
  }, [mode]);

  return {
    states: {
      form,
      error,
      mode,
    },
    handlers: {
      handleModeChange,
      handleChange,
      handleSubmit,
    },
  };
}
