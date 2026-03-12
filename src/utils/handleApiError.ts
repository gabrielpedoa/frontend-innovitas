export function handleApiError(error: any): never {
  const apiError = error?.response?.data?.error;

  if (Array.isArray(apiError)) {
    const message = apiError
      .map((err) => {
        const field = err.path?.join(".") || "campo";
        return `${field}`;
      })
      .join("\n");

    throw new Error(`Campos estão inválidos:\n${message}`);
  }

  if (typeof apiError === "string") throw new Error(apiError);

  throw new Error("Erro inesperado ao processar a requisição");
}
