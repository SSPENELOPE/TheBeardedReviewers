const newFormHandler = async (event) => {
  event.preventDefault();
  const title = document.querySelector('#form-title')
  const description = document.querySelector('#form-review').value.trim();

  if (title && description) {
    const response = await fetch('/api/review', {
      method: 'POST',
      body: JSON.stringify({ title, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/review/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};

document
  .querySelector('.new-review-form')
  .addEventListener('submit', newFormHandler);

/* document
  .getElementById('#userReview')
  .addEventListener('click', delButtonHandler); */
