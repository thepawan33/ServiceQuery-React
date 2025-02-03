import "./SinQuery.css";
import { DateFormater } from "../../../../utils/DeteFromater";
export default function SinQuery({
  name,
  purpose,
  email,
  date,
  read,
  readMessages,
}) {
  const className =
    read == true || readMessages == true
      ? "query-span"
      : "query-span unread-name";
  const classEamil =
    read == true || readMessages == true
      ? "query-span"
      : "query-span unread-email";

  return (
    <div className="SinQuery-main">
      <div className="SinQuery">
        <span className={className}> {name}</span>
        <span className={classEamil}> {email}</span>
        <span className="query-span"> {purpose}</span>
      </div>
      <div className="Sin-sec">
        <span className="query-time"> {DateFormater(date)}</span>
      </div>
    </div>
  );
}
