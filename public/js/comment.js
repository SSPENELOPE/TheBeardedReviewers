// Comment From 
const commentFormHandler = async (event) => {
    event.preventDefault();

    const comment = document.querySelector("#comment");
    if (comment) {
        const response = await fetch('/api/comment/', {
            method: 'POST', 
            body: JSON.stringify({ body }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.reload();     
        } else {
            alert("error posting your comment")
        }
    }
};