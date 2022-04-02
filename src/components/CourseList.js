import Course from './Course.js'

const CourseList = ({ courses }) => (
    <div>
        {Object.values(courses).map(course => <Course key={course.id} course={course} />)}
    </div>
);
export default CourseList