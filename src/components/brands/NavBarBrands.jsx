import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import styles from "./brands.module.css";

const NavBarBrands = ({ filterResult }) =>
{
  const { brndNav } = styles;

  return (
    <>
      <ButtonGroup sizs="sm" className={brndNav}>
        <Button onClick={() => filterResult("a")} className="m-1 rounded">A</Button>
        <Button onClick={() => filterResult("b")} className="m-1 rounded">B</Button>
        <Button onClick={() => filterResult("c")} className="m-1 rounded">C</Button>
        <Button onClick={() => filterResult("d")} className="m-1 rounded">D</Button>
        <Button onClick={() => filterResult("e")} className="m-1 rounded">E</Button>
        <Button onClick={() => filterResult("f")} className="m-1 rounded">F</Button>
        <Button onClick={() => filterResult("g")} className="m-1 rounded">G</Button>
        <Button onClick={() => filterResult("h")} className="m-1 rounded">H</Button>
        <Button onClick={() => filterResult("i")} className="m-1 rounded">I</Button>
        <Button onClick={() => filterResult("j")} className="m-1 rounded">J</Button>
        <Button onClick={() => filterResult("k")} className="m-1 rounded">K</Button>
        <Button onClick={() => filterResult("l")} className="m-1 rounded">L</Button>
        <Button onClick={() => filterResult("m")} className="m-1 rounded">M</Button>
        <Button onClick={() => filterResult("n")} className="m-1 rounded">N</Button>
        <Button onClick={() => filterResult("o")} className="m-1 rounded">O</Button>
        <Button onClick={() => filterResult("p")} className="m-1 rounded">P</Button>
        <Button onClick={() => filterResult("q")} className="m-1 rounded">Q</Button>
        <Button onClick={() => filterResult("r")} className="m-1 rounded">R</Button>
        <Button onClick={() => filterResult("s")} className="m-1 rounded">S</Button>
        <Button onClick={() => filterResult("t")} className="m-1 rounded">T</Button>
        <Button onClick={() => filterResult("u")} className="m-1 rounded">U</Button>
        <Button onClick={() => filterResult("v")} className="m-1 rounded">V</Button>
        <Button onClick={() => filterResult("w")} className="m-1 rounded">W</Button>
        <Button onClick={() => filterResult("x")} className="m-1 rounded">X</Button>
        <Button onClick={() => filterResult("y")} className="m-1 rounded">Y</Button>
        <Button onClick={() => filterResult("z")} className="m-1 rounded">Z</Button>
      </ButtonGroup>
    </>
  );
};

export default NavBarBrands