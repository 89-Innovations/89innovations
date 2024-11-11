export const handleFormSubmission = (
  formId: string,
  resultId: string,
  submitButtonId: string
): void => {
  const form = document.getElementById(formId) as HTMLFormElement | null;
  const result = document.getElementById(resultId) as HTMLElement | null;
  const submitButton = document.getElementById(
    submitButtonId
  ) as HTMLButtonElement | null;

  if (!form || !result || !submitButton) {
    console.error('Element not found. Please check the IDs provided.');
    return;
  }

  form.addEventListener('submit', async (e: Event) => {
    e.preventDefault();

    result.className = '';
    result.innerHTML = 'Sending...';

    // Disable the submit button
    submitButton.disabled = true;
    submitButton.innerHTML = 'Sending...';

    const formData = new FormData(form);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const responseData = await response.json();

      if (response.ok) {
        form.reset();
        result.className =
          'bg-green-200 text-sm font-bold p-1.5 text-green-700 rounded';
        result.innerHTML = 'Form submitted successfully!';
      } else {
        result.className =
          'bg-red-200 text-sm font-bold p-1.5 text-accent rounded';
        result.innerHTML = `Error: ${responseData.message}`;
      }
    } catch (error) {
      result.className =
        'bg-red-200 text-sm font-bold p-1.5 text-accent rounded';
      result.innerHTML = 'An error occurred. Please try again later.';
    } finally {
      // Re-enable the submit button
      submitButton.disabled = false;
      submitButton.innerHTML = 'Send Message';
    }

    setTimeout(() => {
      result.classList.add('invisible');
    }, 2000);
  });
};
