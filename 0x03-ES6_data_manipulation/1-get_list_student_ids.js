export default function getListStudentIds(arg) {
    if (!arg || !Array.isArray(arg)) {
        return [];
    }
    return arg.map((item) => item.id);
}
