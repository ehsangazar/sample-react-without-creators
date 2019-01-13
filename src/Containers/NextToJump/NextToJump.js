import React from 'react'
import {
  H3,
  SPAN,
  HarnessHorseIcon,
  ReadyHorseIcon,
  RunningHorseIcon,
  Button
} from 'Components'
import longPolling from 'Utils/longPolling'
import convertTimestampToDetails from 'Utils/convertTimestampToDetails'
import Races from 'Models/Races'
import styled from 'styled-components'

const SidebarSetcionStyled = styled.div`
  border-radius: 4px;
  margin: 10px;
`
const HeadLineStyled = styled.div`
  background-color: #8935c0;
  border-radius: 4px 0;
  display: flex;
  align-items: center;
  color: #ffffff;
  h3 {
    padding: 12px 14px;
    color: #ffffff;
  }
  border-bottom: 1px #dddddd solid;
`
const ContentAreaStyled = styled.div`
  background-color: #ffffff;
  border-radius: 0px 4px;
`
const ErrorStyled = styled.div`
  color: #eeeeee;
  font-size: 10px;
  animation: blinker 1s linear infinite;
  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
`
const RowStyled = styled.div`
  display: flex;
  padding: 5px 10px;
  border-bottom: 1px #dddddd solid;
  justify-content: space-between;
`
const RowFirstStyled = styled.div`
  display: flex;
  div {
    padding: 10px;
  }
`
const RowSecondStyled = styled.div`
  color: #ff4b3d;
  font-size: 12px;
  display: flex;
  align-items: center;
  padding: 5px 10px;
`
const FilterStyled = styled.div`
  padding: 5px 10px;
  display: flex;
  button {
    margin: 10px 4px;
  }
  border-bottom: 1px #dddddd solid;
`

class NextToJump extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      error: false,
      races: [],
      parsedRaces: [],
      active: 'all',
      pollingAPI: true,
      pollingCountDown: true,
    };
  }

  componentDidMount(){
    longPolling({
      conditionFucntion: () => { return this.state.pollingAPI },
      callFunction: this._getLatestRaces,
      errorFunction: () => {
        this.setState({
          error: true,
        })
      },
      interval: 4000
    })
    longPolling({
      conditionFucntion: () => { return this.state.pollingCountDown },
      callFunction: this._parseInfo,
      errorFunction: () => {
        this.setState({
          error: true,
        })
      },
      interval: 1000
    })
  }

  componentWillUnmount(){
    this.setState({
      pollingAPI: false,
      pollingCountDown: false
    })
  }

  _getLatestRaces = () => {
    this.setState({
      loading: true,
    }, async () => {
      const data = await Races.getLatest()
      if (data.status === 'ok'){
        this.setState({
          races: data.data,
          loading: false,
          error: false,
        })
      }else{
        this.setState({
          error: true, 
          loading: false,
        })
      }
    })
  }
  _handleClick = (activeText) => {
    this.setState({
      active: activeText
    })
  }
  _parseInfo = () => {
    const { races } = this.state
    if (races.result) {
      races.result.map(race => {
        let diff = new Date(race.AdvertisedStartTime).getTime() - new Date().getTime()
        race.countDownString = this._parseTimestamp(diff)
        return race;
      })
    }
    this.setState({
      parsedRaces: races
    })
  }

  _parseTimestamp = (timestamp) => {
    return convertTimestampToDetails(timestamp).parsedString
  }

  render() {
    const { loading, parsedRaces, active, error } = this.state
    return (
      <SidebarSetcionStyled>
        <HeadLineStyled>
          <H3>Next To Jump</H3>
          {error && <ErrorStyled> -- fetch failed</ErrorStyled>}
          {loading && <ErrorStyled> -- updating</ErrorStyled>}
        </HeadLineStyled>

        <ContentAreaStyled>
          <FilterStyled>
            <Button 
              active={active === 'all'}
              onClick={()=>this._handleClick('all')}
            >
              All
            </Button>
            <Button 
              active={active === 'ready'}
              onClick={()=>this._handleClick('ready')}
            >
              <ReadyHorseIcon />
            </Button>
            <Button 
              active={active === 'running'}
              onClick={()=>this._handleClick('running')}
            >
              <RunningHorseIcon />
            </Button>
            <Button 
              active={active === 'harness'}
              onClick={()=>this._handleClick('harness')}
            >
              <HarnessHorseIcon />
            </Button>
          </FilterStyled>
          <div>
            {parsedRaces && 
              parsedRaces.result && 
              parsedRaces.result.filter(race => {
                if (active === 'ready') {
                  return race.EventTypeDesc === 'Trots'
                } else if (active === 'running') {
                  return race.EventTypeDesc === 'Thoroughbred'
                } else if (active === 'harness') {
                  return race.EventTypeDesc === 'Greyhounds'
                } else {
                  return true
                }
              })
              .map((race,index) => (
                  <RowStyled key={`RaceRow-${index}`}>
                    <RowFirstStyled>
                      <div>
                        {race.EventTypeDesc === 'Trots' && <ReadyHorseIcon />}
                        {race.EventTypeDesc === 'Thoroughbred' && <RunningHorseIcon />}
                        {race.EventTypeDesc === 'Greyhounds' && <HarnessHorseIcon />}
                      </div>
                      <div>
                        <H3>{race.EventName}</H3>
                        <SPAN>{race.Venue.Venue}</SPAN>
                      </div>
                    </RowFirstStyled>
                    <RowSecondStyled>
                      {race.countDownString}
                    </RowSecondStyled>
                  </RowStyled>
                )
            )}
          </div>
        </ContentAreaStyled>
      </SidebarSetcionStyled>
    )
  }
}


export default NextToJump