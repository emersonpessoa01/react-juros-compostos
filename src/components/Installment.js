import React from "react";

const formatter = Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const formatNumber = (number) => {
  return formatter.format(number);
};

const formatterPositiveNegative = (number) => {
  const money = formatter.format(number);

  if (number >= 0) {
    return `+${money}`;
  }
  return money;
};

export default function Installment({ data }) {
  const { id, amount, difference, rate, profit } = data;

  // const classGoodCapital = "green-text darken-4";
  // const classBadCapital = "red-text darken-4";
  const classGoodRate = "blue-text darken-4";
  const classBadRate = "orange-text darken-4";

  const classCapital = profit
    ? styles.classGoodCapital
    : styles.classBadCapital;
  const classRate = profit ? classGoodRate : classBadRate;

  const gradeStyle = profit > 0 ? styles.circleGreen : styles.circleRed;

  return (
    <div className="col s6 m4 l3" style={styles.flexRow}>
      <div style={gradeStyle}>{id}</div>
      <div>
          <div style={styles.alignFonts}>
            <div style={classCapital}>
              <strong>Montante:{formatNumber(amount)}</strong>
            </div>
            <div style={classCapital}>
              <strong>Juros:{formatterPositiveNegative(difference)}</strong>
            </div>
            <div className={classRate}>
              <strong>Taxa:{rate}%</strong>
            </div>
          </div>
      </div>
    </div>
  );
}

const styles = {
  classGoodCapital: {
    color: "#02569B",
  },
  classBadCapital: {
    color: "#DD0031",
  },

  flexRow: {
    display: "flex",
    flexRow: "row",
    alignItems: "center",

    border: "1px solid lightgray",
    borderRadius: "4px",
    padding: "4px",
    margin: "4px",
  },
  circleGreen: {
    verticalAlign: "middle",
    margin: 0,
    padding: 0,
    listStyle: "none",

    backgroundColor: "#107C10",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    float: "left",

    fontWeight: "bold",
  },
  circleRed: {
    verticalAlign: "middle",
    margin: 0,
    padding: 0,
    listStyle: "none",

    backgroundColor: "#FF0000",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    float: "left",
    fontWeight: "bold",
  },

  alignFonts: {
    alignItems: "left",
  },
};
