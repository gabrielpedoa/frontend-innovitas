export function handleApiError(error: any): never {
  const apiError = error?.response?.data?.error;

  if (Array.isArray(apiError)) {
    const message = apiError.map((err) => err.message).join(", ");
    throw new Error(message);
  }

  if (typeof apiError === "string") throw new Error(apiError);

  throw new Error("Unexpected error");
}
