import Course from './Course.js'
import TermSelector from './TermSelector.js'

const TermSelector = () => (
  <div className="btn-group">
  { 
    Object.values(terms)
      .map(value => <TermButton key={value} term={value} />)
  }
  </div>
);

const CourseList = ({ courses }) => (
  <>
    <TermSelector />
    <div className="course-list">
      {Object.values(courses).map(course => <Course key={course.id} course={course} />)}
    </div>
  </>
  // JSX syntax only allows one component to be returned.
  // The empty element syntax <> is a way to return several components as one, without creating an unnecessary HTML element, such as a div.
);
export default CourseList