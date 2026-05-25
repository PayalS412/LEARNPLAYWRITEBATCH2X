//Given the percentage of test cases passed in a CI build, report build health.

let percentagePassed = 65;


if (percentagePassed >= 90 && percentagePassed <= 99) {
    console.log(`Stable Investigate failures: ${percentagePassed}%`);
} else if (percentagePassed >= 70 && percentagePassed <= 89) {
    console.log(`Unstable: ${percentagePassed}%`);
} else {
    console.log(`Broken Build(block deployment): ${percentagePassed}%`);
}