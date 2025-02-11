/**
 * Calculate BMI
 * - takes a weight in KG
 * - takes a height in cm
 * - returns the calculated BMI
 */

function calculateBMI(weight, height) {
  /**
   *  Write your code here 👇🏼
   */
  let BMI = weight / ((height / 100) * (height / 100));

  /**
   * Stop making changes here!
   */
  return BMI;
}

/**
 * Get BMI State
 * - takes the BMI
 * - returns a string with the BMI state
 */
function getBMIState(BMI) {
  let BMIState;
  if (BMI <= 18.5) {
    BMIState = "underweight";
  } else if (BMI > 18.5 && BMI <= 24.9) {
    BMIState = "healthy";
  } else if (BMI > 24.9 && BMI <= 29.9) {
    BMIState = "overweight";
  } else {
    BMIState = "obese";
  }
  /**
   * Stop making changes here!
   */
  return BMIState;
}

/**
 * Get BMI State by Age
 * - takes the BMI
 * - takes the age
 * - returns a string with the BMI state
 */
function getBMIStateByAge(BMI, age) {
  /**
   *  Write your code here 👇🏼
   */
  let BMIState;

  if (age >= 19 && age <= 24 && BMI >= 19 && BMI <= 24) {
    BMIState = "healthy";
  } else if (age >= 25 && age <= 34 && BMI >= 20 && BMI <= 25) {
    BMIState = "healthy";
  } else if (age >= 35 && age <= 44 && BMI >= 21 && BMI <= 26) {
    BMIState = "healthy";
  } else if (age >= 45 && age <= 54 && BMI >= 22 && BMI <= 27) {
    BMIState = "healthy";
  } else if (age >= 55 && age <= 64 && BMI >= 23 && BMI <= 28) {
    BMIState = "healthy";
  } else if (age >= 64 && BMI >= 24 && BMI <= 29) {
    BMIState = "healthy";
  } else {
    BMIState = "not healthy";
  }
  /**
   * Stop making changes here!
   */
  return BMIState;
}

module.exports = { calculateBMI, getBMIState, getBMIStateByAge };
