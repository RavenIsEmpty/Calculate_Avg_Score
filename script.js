function calculateResult() {
    const getScore = id => parseInt(document.getElementById(id).value) || 0;
    const htmlScore = getScore("html");
    const cssScore = getScore("css");
    const jsScore = getScore("js");

    const average = ((htmlScore + cssScore + jsScore) / 3).toFixed(2);
    document.getElementById("average").value = average;

    const grade = average >= 90 ? 'A' :
                  average >= 80 ? 'B' :
                  average >= 70 ? 'C' :
                  average >= 60 ? 'D' : 'F';

    document.getElementById("grade").value = grade;
}
