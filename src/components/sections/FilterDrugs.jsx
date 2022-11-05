import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import styles from "../brands/brands.module.css";

const filterDrugs = ({ filterDrug }) =>
{
  const { brndNav } = styles;

  return (
    <>
      <ButtonGroup sizs="sm" className={brndNav}>
        <Button onClick={() => filterDrug("a")} className="m-1 rounded">A</Button>
        <Button onClick={() => filterDrug("b")} className="m-1 rounded">B</Button>
        <Button onClick={() => filterDrug("c")} className="m-1 rounded">C</Button>
        <Button onClick={() => filterDrug("d")} className="m-1 rounded">D</Button>
        <Button onClick={() => filterDrug("e")} className="m-1 rounded">E</Button>
        <Button onClick={() => filterDrug("f")} className="m-1 rounded">F</Button>
        <Button onClick={() => filterDrug("g")} className="m-1 rounded">G</Button>
        <Button onClick={() => filterDrug("h")} className="m-1 rounded">H</Button>
        <Button onClick={() => filterDrug("i")} className="m-1 rounded">I</Button>
        <Button onClick={() => filterDrug("j")} className="m-1 rounded">J</Button>
        <Button onClick={() => filterDrug("k")} className="m-1 rounded">K</Button>
        <Button onClick={() => filterDrug("l")} className="m-1 rounded">L</Button>
        <Button onClick={() => filterDrug("m")} className="m-1 rounded">M</Button>
        <Button onClick={() => filterDrug("n")} className="m-1 rounded">N</Button>
        <Button onClick={() => filterDrug("o")} className="m-1 rounded">O</Button>
        <Button onClick={() => filterDrug("p")} className="m-1 rounded">P</Button>
        <Button onClick={() => filterDrug("q")} className="m-1 rounded">Q</Button>
        <Button onClick={() => filterDrug("r")} className="m-1 rounded">R</Button>
        <Button onClick={() => filterDrug("s")} className="m-1 rounded">S</Button>
        <Button onClick={() => filterDrug("t")} className="m-1 rounded">T</Button>
        <Button onClick={() => filterDrug("u")} className="m-1 rounded">U</Button>
        <Button onClick={() => filterDrug("v")} className="m-1 rounded">V</Button>
        <Button onClick={() => filterDrug("w")} className="m-1 rounded">W</Button>
        <Button onClick={() => filterDrug("x")} className="m-1 rounded">X</Button>
        <Button onClick={() => filterDrug("y")} className="m-1 rounded">Y</Button>
        <Button onClick={() => filterDrug("z")} className="m-1 rounded">Z</Button>
      </ButtonGroup>
    </>
  );
};

export default filterDrugs;