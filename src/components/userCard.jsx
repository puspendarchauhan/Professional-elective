function UserCard({ data }) {
  return (
    <div className="card">
      <h3 className="name">{data.name}</h3>
      <p className="meta"><b>Country:</b> {data.country}</p>
      <p className="meta"><b>Role:</b> {data.role}</p>
    </div>
  );
}

export default UserCard;
