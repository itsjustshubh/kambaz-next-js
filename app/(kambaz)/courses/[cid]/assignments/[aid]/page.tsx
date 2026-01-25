export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea
        id="wd-description"
        rows={10}
        cols={50}
        defaultValue="The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section links to each of the lab assignments link to the Kanbas application a link to your GitHub repository"
      />
      <br />
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input type="number" id="wd-points" defaultValue={100} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assignment-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-assignment-group" defaultValue="ASSIGNMENTS">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option value="EXAMS">EXAMS</option>
                <option value="PROJECT">PROJECT</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as" defaultValue="Percentage">
                <option value="Percentage">Percentage</option>
                <option value="Points">Points</option>
                <option value="Letter">Letter</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type" defaultValue="Online">
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              Online Entry Options
            </td>
            <td>
              <input type="checkbox" id="wd-online-text-entry" />
              <label htmlFor="wd-online-text-entry">Text Entry</label>
              <br />
              <input type="checkbox" id="wd-online-website-url" />
              <label htmlFor="wd-online-website-url">Website URL</label>
              <br />
              <input type="checkbox" id="wd-online-media-recording" />
              <label htmlFor="wd-online-media-recording">Media Recording</label>
              <br />
              <input type="checkbox" id="wd-online-student-annotation" />
              <label htmlFor="wd-online-student-annotation">
                Student Annotation
              </label>
              <br />
              <input type="checkbox" id="wd-online-file-upload" />
              <label htmlFor="wd-online-file-upload">File Uploads</label>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign to</label>
            </td>
            <td>
              <input
                id="wd-assign-to"
                defaultValue="Everyone"
                placeholder="Everyone"
              />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due</label>
            </td>
            <td>
              <input type="date" id="wd-due-date" defaultValue="2024-05-13" />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-from">Available from</label>
            </td>
            <td>
              <input
                type="date"
                id="wd-available-from"
                defaultValue="2024-01-01"
              />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-until">Until</label>
            </td>
            <td>
              <input
                type="date"
                id="wd-available-until"
                defaultValue="2024-12-31"
              />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top"></td>
            <td>
              <input type="checkbox" id="wd-available" defaultChecked />
              <label htmlFor="wd-available">Available</label>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top"></td>
            <td>
              <input type="checkbox" id="wd-published" defaultChecked />
              <label htmlFor="wd-published">Published</label>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <button>Cancel</button>
      <button>Save</button>
    </div>
  );
}
