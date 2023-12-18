import axios from "axios";

export function configureAxios(): void {
  axios.interceptors.request.use((cfg) => {
    cfg.headers = {
      ...cfg.headers,
      "Ocp-Apim-Subscription-Key": import.meta.env
        .VITE_AZURE_FUNCTIONS_API_KEY as string,
      "Cache-Control": "private, max-age=100",
    };
    return cfg;
  });
}
