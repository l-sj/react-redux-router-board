import React, { Fragment, Component } from 'react'
import { 
  BarLoader, // 로딩바
  BeatLoader, // 점 세개
  BounceLoader, // 원이 커졌다 작아졌다
  CircleLoader, // 원 라인들이이 회오리?
  ClipLoader, // 채원지지 않은 원 라인이 회전
  ClimbingBoxLoader, //사선 막대에 네막 박스가 오르내리는 모습
  DotLoader, // 두개의 원이 작아졌다 커졌다 하면서 회전
  FadeLoader, // 여덟개의 선이 동그라미 형태
  GridLoader, // 아홉개의 동그라미가 네모 형태
  HashLoader, // 네개의 선이 길어졌다 작어졌다 하면서 회전. 길어졌을때는 서로 교차하여 # 형태
  MoonLoader, // 두꺼운 라인의 동그라미에 점이 찍힌 도형이 회전축이 왔다갔다 하면서 회전
  PacmanLoader, // 작은 점이 큰 원의 입으로 들어가는 모습. 큰 원은 입이 벌어졌다 다물어졌다 하면서 점을 먹음.
  PropagateLoader, // 한 개의 점이 세개 다섯개 형태로 양옆으로 펼쳐짐
  PulseLoader, // 원 세개가 순서에 맞게 작아졌다 커졌다
  RiseLoader, // 점 다섯개가 두개,세개로 나눠져서 한 줄에서 두개는 아래로 세개는 위로 왔다 갔다 
  RotateLoader, // 원 세개가 있고, 가운데 원은 가만히 있고 양옆의 점 두개가 회전
  ScaleLoader, // 라인 여섯개가 세로로 세워져 있고, 순서에 맞게 커졌다 작아졌다
  SyncLoader, // 원 세개가 순서에 맞게 위로 바운스
} from 'react-spinners'
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  loading: state.listData.loading
})
const mapDispatchToProps = (dispatch) => ({

})

class LoaderSpinners extends Component {
  
  render () {
    console.log( 'LoaderSpinners: ', this.props );
    if( this.props.loading ){
      return (
        <Fragment>
          <div className="wrap-loader-spinner">
            <div className="inner-loader-spinner">
              <SyncLoader className="component-loader-spinner" />
            </div>
          </div>
        </Fragment>
      )
    } else {
      return (
        <Fragment></Fragment>
      )
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoaderSpinners);