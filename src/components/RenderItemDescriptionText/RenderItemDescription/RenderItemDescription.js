import ArrowRightIcon from "@mui/icons-material/ArrowRight";
const RenderItemDescription = ({ data }) => {
  return (
    <>
      <li className="Description">
        <ArrowRightIcon fontSize="large" />
        <p className="TextDescription">{data} </p>
      </li>
    </>
  );
};
export default RenderItemDescription;
