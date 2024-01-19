import { useState } from "react";

export default function Page(props) {
  // can't edit a props property it is only a  readonly property
  // props.budget=555;

  let cardData = [
    {
      id: 1,
      title: "promoting for business 1",
      budget: 100,
      type: "Remote",
      timeAgo: "16 Hours Ago",
    },
    {
      id: 2,
      title: "promoting for business 2",
      budget: 200,
      type: "kolkata",
      timeAgo: "13 Hours Ago",
    },
    {
      id: 3,
      title: "promoting for business 3",
      budget: 300,
      type: "odisha",
      timeAgo: "7 Hours Ago",
    },
    {
      id: 4,
      title: "promoting for business 4",
      budget: 400,
      type: "Remote",
      timeAgo: "1 Hours Ago",
    },
  ];

  const updateData = () => {
    console.log("hiiiiiiiiiiii");
    console.log(cardData);
    cardData[1].budget = 3000;
    console.log(cardData);
  };

  const type = props.type.data;

  if (type === "signIn") return <SignIn />;
  if (type === "signUp") return <SignUp />;
  else
    return (
      <>
        <h1>Header</h1>
        <button className="btn btn-danger" onClick={updateData}>
          Update
        </button>
        <BrowseTask cardData={cardData} />
      </>
    );
}

const BrowseTask = (props) => {
  return (
    <>
      <h1>Browse task page</h1>
      {props.cardData.map((card) => {
        return <TaskCard key={card.id} data={card} />;
      })}
    </>
  );
};

const TaskCard = (props) => {
  const shoot = (event, data) => {
    console.log(event);
    alert(data + " shot!!!!!!!!!!!");
  };

  const onChangeInput = (event) => {
    console.log(event.target.value);
  };
  const data = props.data;
  return (
    <div className="card mt-3 p-5">
      <h1>{data.title}</h1>
      <table className="card-body ">
        <tr>
          <td>
            ${data.budget}{" "}
            {data.budget > 200 && <span className="great">Great </span>}
          </td>
          <td>{data.timeAgo}</td>
        </tr>
        <tr>
          <td>{data.type}</td>
        </tr>
      </table>
      <button
        className="btn btn-primary"
        onClick={(event) => shoot(event, "Goal!")}
      >
        Take the shot!
      </button>
      <input
        className="mt-4"
        type="text"
        onChange={(event) => onChangeInput(event)}
      />
    </div>
  );
};

const SignIn = () => {
  const [inputs, setInput] = useState({});

  const onSubmitForm = (event) => {
    event.preventDefault();
    alert("Form Value : username " + inputs.username);
  };

  const eventHandler = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setInput(values => ({...values,[name]:value}));
  }
  return (
    <div className="row">
      <form onSubmit={onSubmitForm}>
        <div className="col-lg-6">
          <label htmlFor="username">Enter Your User name </label>
          <input
            name="username"
            className="mt-4"
            onChange={eventHandler}
            type="text"
            value={inputs.username || ""}
            placeholder="john doe"
          />
        </div>
        <div className="col-lg-6">
          <label htmlFor="">Enter Your Password </label>
          <input
            name="password"
            className="mt-4"
            type="password"
            onChange={eventHandler}
            value={inputs.password || ""}
            placeholder="**********"
          />
        </div>
        <div className="col-lg-12 text-center mt-3">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

const SignUp = () => {
  return (
    <div className="row">
      <div className="col-lg-6">
        <label htmlFor="firstname">Enter Your First name </label>
        <input
          name="firstname"
          className="mt-4"
          type="text"
          placeholder="john"
        />
      </div>
      <div className="col-lg-6">
        <label htmlFor="Lastname">Enter Your Last name </label>
        <input
          name="Lastname"
          className="mt-4"
          type="text"
          placeholder="john"
        />
      </div>
      <div className="col-lg-6">
        <label htmlFor="Lastname">Enter Your mobile Number </label>
        <input
          name="Lastname"
          className="mt-4"
          type="text"
          placeholder="0000 0000 00"
        />
      </div>
      <div className="col-lg-6">
        <label htmlFor="">Enter Your Password </label>
        <input
          name="password"
          className="mt-4"
          type="password"
          placeholder="**********"
        />
      </div>
      <div className="text-center mt-3">
        <button className="btn btn-primary">Submit</button>
      </div>
    </div>
  );
};
