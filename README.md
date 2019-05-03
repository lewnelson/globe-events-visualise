# React events WebGL globe visualisation
This library is for creating a 3D visualisation of events around the globe in React using [THREE.js](https://threejs.org/).

## Make it so
```
npm install --save git+https://git@github.com/lewnelson/react-globe-events.git#v1
```
The most basic example
```
import EventsGlobe from 'react-globe-events'

const events = [
  [
    {
      id: '123',
      lat: -25.0253898,
      lon: 46.9540537,
      name: 'Washington DC meetup',
      location: 'Washington',
      date: '05-20-2025',
      localTime: '18:00',
      url: 'https://example.org/'
    }
  ]
]

export default () => (
  <EventsGlobe
    events={events}
    width={window.innerWidth}
    height={window.innerHeight}
  />
)

```
For a full list of props see https://github.com/lewnelson/react-globe-events-visualiser/blob/master/src/Events.js#L20