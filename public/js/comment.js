const newFormHandler = async (event) => {
  event.preventDefault();

  const comment = document.querySelector("#comment-card").value.trim();

  if (comment) {
    const response = await fetch(`/api/review`, {
      method: "POST",
      body: JSON.stringify({ body }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/review");
    } else {
      alert("Failed to create comment");
    }
  }
};

document
  .querySelector(".new-comment-form")
  .addEventListener("submit", newFormHandler);
