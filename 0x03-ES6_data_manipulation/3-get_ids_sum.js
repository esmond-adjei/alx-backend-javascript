export default function getStudentIdsSum(students) {
  const reducer = (sum, currentValue) => sum + currentValue.id;
  return students.reduce(reducer, 0);
}
