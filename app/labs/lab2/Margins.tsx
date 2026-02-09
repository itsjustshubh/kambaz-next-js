export default function Margins() {
  return (
    <div id="wd-css-margins">
      <h2>Margins</h2>
      <div
        id="wd-margins-padding-top-left"
        className="wd-border-fat wd-border-solid wd-border-red wd-bg-color-yellow wd-padded-top-left"
      >
        Fat red border, yellow background, big padding above and left
      </div>
      <div
        id="wd-margins-padding-bottom"
        className="wd-border-fat wd-border-solid wd-border-blue wd-bg-color-yellow wd-padded-bottom"
      >
        Fat blue border, yellow background, big padding at bottom
      </div>
      <div
        id="wd-margins-padding-all"
        className="wd-border-fat wd-border-solid wd-border-yellow wd-bg-color-blue wd-fg-color-white wd-padding-fat"
      >
        Fat yellow border, blue background, big padding all around
      </div>
      <div
        id="wd-margins-margin-bottom"
        className="wd-border-fat wd-border-solid wd-border-red wd-bg-color-yellow wd-margin-bottom"
      >
        Fat red border, yellow background, margin at bottom
      </div>
      <div
        id="wd-margins-centered"
        className="wd-border-fat wd-border-solid wd-border-blue wd-bg-color-yellow wd-margin-center"
        style={{ maxWidth: "400px" }}
      >
        Fat blue border, yellow background, centered (margins both sides)
      </div>
      <div
        id="wd-margins-big-margins"
        className="wd-border-fat wd-border-solid wd-border-yellow wd-bg-color-blue wd-fg-color-white wd-margin-all-around"
      >
        Fat yellow border, blue background, big margins all around
      </div>
    </div>
  );
}
