if (import.meta.hot) {
  import.meta.hot.on("vite:error", (error) => {
    console.log("hmr-error", error);
    try {
      window.parent.postMessage(
        {
          type: "hmr-error",
          data: {
            error: error,
          },
        },
        "*"
      );
    } catch (e) {
      console.error("Failed to post message:", e);
    }
  });
  
  import.meta.hot.on("vite:afterUpdate", (update) => {
    console.log("hmr-update-complete", update);
    try {
      window.parent.postMessage(
        {
          type: "hmr-update-complete"
        },
        "*"
      );
    } catch (e) {
      console.error("Failed to post message:", e);
    }
  });
}
