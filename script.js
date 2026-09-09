async function loadQuestions() {
  try {
    const response = await fetch('./MCQ_Pharma_25_reformatted.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Loaded MCQs successfully:", data);
    
    // Call your function to display the first question here
    // e.g., renderQuestion(data[0]);
  } catch (error) {
    console.error("Failed to load MCQ JSON file:", error);
  }
}

// Load on page startup
loadQuestions();
