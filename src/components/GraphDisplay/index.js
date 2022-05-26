import { Box } from '@mui/material';
import { useEffect } from 'react';
import Graph from 'react-graph-vis';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrent, getAPIStories } from '../../store/graph';

// This will display graphs for the explore and user profile pages
export default function GraphDisplay() {
  const dispatch = useDispatch();
  const { stories, currentStory } = useSelector((state) => state.graph);

  useEffect(() => {
    dispatch(getAPIStories(1));
    dispatch(setCurrent(1));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function handleClick({ nodes }) {
    const node = nodes[0];
    dispatch(setCurrent(node));
    dispatch(getAPIStories(node));
  }

  // console.log('Stories is', stories, 'currentStory is', currentStory);

  let edges;

  if (currentStory.neighbors?.length) {
    edges = currentStory.neighbors.map((neighborId) => {
      return { from: currentStory.id, to: neighborId };
    });
  }

  return (
    <Box
      sx={{
        minHeight: '30vh',
        minWidth: '50vh',
      }}
    >
      {stories?.length ? (
        <Graph
          key={Math.random().toString()}
          graph={{
            nodes: JSON.parse(JSON.stringify(stories)),
            edges: JSON.parse(JSON.stringify(edges)),
          }}
          getNetwork={(network) => {
            network.focus(currentStory.id);
            network.fit({ maxZoomLevel: 0.55 });
          }}
          options={{
            physics: {
              enabled: false,
            },
            nodes: {
              shape: 'square',
              font: {
                color: 'white',
              },
            },
            interaction: {
              dragNodes: false,
              dragView: true,
              selectable: true,
              zoomView: false,
            },
            edges: {
              arrows: {
                to: false,
                from: false,
              },
              color: 'white',
            },
          }}
          events={{
            select: handleClick,
            // hoverNode: handleHover,
          }}
        />
      ) : null}
    </Box>
  );
}
