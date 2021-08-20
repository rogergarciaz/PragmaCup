const withoutInfo = "No Information";

export default function Basses({ personalInformation }) {
  return (
    <>
      {personalInformation && personalInformation.length > 0 ? (
        personalInformation.map((item, index) => {
          return (
            <p key={index}>
              {item}
              <br />
            </p>
          );
        })
      ) : (
        <code>{withoutInfo}</code>
      )}
    </>
  );
}
