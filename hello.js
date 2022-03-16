const form = document.querySelector('.quiz-form');
const ans = ["B", "B", "A", "A", "B", "A", "B", "A", "B", "A"];
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const cur = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value, form.q8.value, form.q9.value, form.q10.value];
    cur.forEach((option, idx) => {
        if(option === ans[idx]) {
            score += 10;
        }
    });

    scrollTo(0, 0);
    result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');

    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if(output === score) {
            clearInterval(timer);
        }
        output++;
    }, 10);
});