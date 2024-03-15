
export default function Friends({friends}) {
    const box2 = {
        margin: "24px",
        padding: "16px",
        border: "2px dashed green",
        "border-radius": "10px",
    }
    console.log(friends)
return (
    <div style={box2}>
        <h3>Name: {friends.name}</h3>
        <p>Email: {friends.email}</p>
        <p>Phone: {friends.phone}</p>
        <p>ID: {friends.id}</p>
    </div>
    )
}