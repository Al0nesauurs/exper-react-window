import React, { FC, useState } from "react";
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import AutoSizer from "react-virtualized-auto-sizer";
import './style.css'

interface LargeDataProps {
  options: string[]
}

const ReactWindowRow: FC<LargeDataProps> = (props: any) => {
  const { options } = props
  const [rownNumber, setRownumber] = useState(0)

  const Row = ({ index, style }: ListChildComponentProps): JSX.Element => {
    return (
      <div key={index} className={index % 2 ? 'ListItemOdd' : 'ListItemEven'} style={style}>
        {options[index]}
      </div>
    );
  };

  const listRef: any = React.createRef();

  function scrollToSpecific() {
    listRef.current.scrollToItem(rownNumber, 'center');
  };

  function handleOnSelectRowChange(event: any) {
    setRownumber(event.target.value.replace(/[^0-9]/g, ''))
  }

  return (
    <div style={{ height: "700px", width: "100%" }}>
      <span>Specific row number: </span>
      <input type="text" onChange={handleOnSelectRowChange} />
      <button onClick={scrollToSpecific} >Go</button>
      <AutoSizer >
        {({ height, width }) => (
          <FixedSizeList
            ref={listRef}
            className="List"
            itemCount={options.length} // number of item
            itemSize={35} // size between option
            height={height} // height of this list
            width={width}
          >
            {Row}
          </FixedSizeList>
        )}
      </AutoSizer>
    </div>
  );
}

export default ReactWindowRow