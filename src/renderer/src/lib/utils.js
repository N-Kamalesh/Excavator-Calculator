export function calculateForces(values) {
  // Destructure input values
  const {
    Force0,
    Angle0,
    Radius1,
    Length1,
    Angle1,
    Angle3,
    Pressure4,
    Diameter4,
    Angle4,
    Angle5,
    Angle6,
    Length2H,
    Length3H,
    Length5H,
    Length2V,
    Length3V,
    Length5V,
    LengthP6P7,
    Angle7,
    Length6H,
    Length8H,
    Length6V,
    Length8V,
    LengthP9P10,
    Angle8,
  } = values;

  // Force at P0 (F0)
  const F0 = Number(Force0);
  const theta0 = Number(Angle0);
  const Fh0 = F0 * Math.cos((theta0 * Math.PI) / 180);
  const Fv0 = F0 * Math.sin((theta0 * Math.PI) / 180);

  // Force at P1 (F1)
  const R1 = Number(Radius1);
  const L1 = Number(Length1);
  const F1 = (F0 * R1) / L1;
  const theta1 = Number(Angle1);
  const Fh1 = F1 * Math.cos((theta1 * Math.PI) / 180);
  const Fv1 = F1 * Math.sin((theta1 * Math.PI) / 180);

  // Force at P2 (F2)
  const Fh2 = -(-Fh0) - -Fh1;
  const Fv2 = -Fv0 - -Fv1;
  const F2 = Math.sqrt(Fh2 * Fh2 + Fv2 * Fv2);
  const theta2 = (Math.atan2(Fv2, Fh2) * 180) / Math.PI;

  // Force at P3 (F3)
  const theta3 = Number(Angle3);
  const theta4 = Number(Angle4); // Assuming Angle3 is the angle for F4
  const F3 = F1 * Math.cos((theta3 * Math.PI) / 180);
  const Fh3 = F3 * Math.cos((theta4 * Math.PI) / 180);
  const Fv3 = F3 * Math.sin((theta4 * Math.PI) / 180);

  // Force at P4 (F4)
  const p = Number(Pressure4);
  const d = Number(Diameter4);
  const area = (Math.PI * (d * d)) / 4 / 10000;
  const F4 = p * area;
  const Fh4 = F4 * Math.cos((theta4 * Math.PI) / 180);
  const Fv4 = F4 * Math.sin((theta4 * Math.PI) / 180);

  // Force at P5 (F5)
  const theta5 = Number(Angle5); // Assuming Angle6 is the angle for F5
  const theta6 = Number(Angle6);
  const F5 = F1 * Math.cos((theta5 * Math.PI) / 180);
  const Fh5 = F5 * Math.cos((theta6 * Math.PI) / 180);
  const Fv5 = F5 * Math.sin((theta6 * Math.PI) / 180);

  // Force at P7 (F7)
  const L2h = Number(Length2H);
  const L3h = Number(Length3H);
  const L5h = Number(Length5H);
  const L2v = Number(Length2V);
  const L3v = Number(Length3V);
  const L5v = Number(Length5V);
  const Lp6p7 = Number(LengthP6P7);
  const F7 =
    (Fh2 * L2v + Fh3 * L3v - Fh5 * L5v - Fv2 * L2h + Fv5 * L5h + Fv3 * L3h) /
    Lp6p7;
  const theta7 = Number(Angle7);
  const Fh7 = F7 * Math.cos((theta7 * Math.PI) / 180);
  const Fv7 = F7 * Math.sin((theta7 * Math.PI) / 180);

  // Force at P6 (F6)
  const Fh6 = Fh2 - -Fh3 - Fh5 - -Fh7;
  const Fv6 = Fv2 - -Fv3 - Fv5 - -Fv7;
  const F6 = Math.sqrt(Fh6 * Fh6 + Fv6 * Fv6);

  // Force at P8 (F8)
  const Fh8 = -Fh7;
  const Fv8 = -Fv7;
  const F8 = Math.sqrt(Fh8 * Fh8 + Fv8 * Fv8);

  // Force at P9 (F9)
  const L6h = Number(Length6H);
  const L6v = Number(Length6V);
  const Lp9p10 = Number(LengthP9P10);
  const theta8 = Number(Angle8);
  const F9 = (Fh6 * L6v - Fv6 * L6h) / Lp9p10;
  const Fh9 = F9 * Math.cos((theta8 * Math.PI) / 180);
  const Fv9 = F9 * Math.sin((theta8 * Math.PI) / 180);

  // Force at P10 (F10)
  const Fh10 = Fh6 + Fh8 + Fh9;
  const Fv10 = Fv6 + Fv8 + Fv9;
  const F10 = Math.sqrt(Fh10 * Fh10 + Fv10 * Fv10);

  return [
    { force: F0, vertical: Fv0, horizontal: Fh0 },
    { force: F1, vertical: Fv1, horizontal: Fh1 },
    { force: F2, vertical: Fv2, horizontal: Fh2 },
    { force: F3, vertical: Fv3, horizontal: Fh3 },
    { force: F4, vertical: Fv4, horizontal: Fh4 },
    { force: F5, vertical: Fv5, horizontal: Fh5 },
    { force: F6, vertical: Fv6, horizontal: Fh6 },
    { force: F7, vertical: Fv7, horizontal: Fh7 },
    { force: F8, vertical: Fv8, horizontal: Fh8 },
    { force: F9, vertical: Fv9, horizontal: Fh9 },
    { force: F10, vertical: Fv10, horizontal: Fh10 },
  ];
}
