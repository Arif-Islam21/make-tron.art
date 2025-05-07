const TotalAssets = ({ data }) => {
  return (
    <div className="p-3 rounded bg-primary my-4">
      <div className="d-flex align-items-center justify-content-between">
        <h2 className="fs-4">Total Assets</h2>
        <p className="fs-5 fw-bold" style={{ color: "#fff" }}>
          {(
            Number(data?.user?.balance || 0) +
            Number(data?.user?.withdraw_balance || 0)
          ).toFixed(2)}{" "}
          USDT
        </p>
      </div>
      <div className="d-flex align-items-center justify-content-between">
        <h2 className="">Basic investment:</h2>
        <p className=" fw-bold" style={{ color: "#fff" }}>
        {(
            Number(data?.user?.balance || 0)
          ).toFixed(2)}{" "} USDT
        </p>
      </div>
      <div className="d-flex align-items-center justify-content-between">
        <h2 className="">Total Investment:</h2>
        <p className=" fw-bold" style={{ color: "#fff" }}>
        {(
            Number(data?.user?.balance || 0)
          ).toFixed(2)}{" "} USDT
        </p>
      </div>
      <div className="d-flex align-items-center justify-content-between">
        <h2 className="">Freezed Bonus:</h2>
        <p className=" fw-bold" style={{ color: "#fff" }}>
          0.00 USDT
        </p>
      </div>
    </div>
  );
};

export default TotalAssets;
