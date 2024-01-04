# css3 flex 속성

- 유연한 layout를 만들기 위하여 css3에서 본격적으로 지원되는 속성
- 부모(container) box tag에 'display:flex'를 설정함으로써 기본 준비가 끝난다.
- 부모 box가 'flex-box' 가 되면 포함되는(children) 요소는 'flex-item'이 된다. 'flex-item'은 기본적으로 'inline-block' 성질을 갖는다
- 부모 vox의 크기에 따라 flex-item은 비율적으로 box의 크기가 정해진다.

## flex-item에 지정하는 속성

- 'flex:정수' : flex-item 의 크기를 정하는 정수값 여러 item이 같은 부모 box에 포함될 경우 'flex:정수'값에 따라 비율이 달리 그려진다

- 'flex-grow:정수' : flex item의 증가비율, 부모 box의 크기가 증가할 때 item의 크기가 증가하는데 이때 flex-grow의 정해진 비율로 증가한다. 'flex:정수'속성은 'flex-grow:정수' 속성과 같다
- 'flex-shrink' : flex item 의 감소 비율, 부모Box의 크기가 감소할때 item의 크기가 감소하는데 이때 flex-shrink의 정해진 비율로 감소한다 'flex:정수1 정수2'로 속성을 지정하면 정수2의 값이 shrink 값이다. shrink 0 일경우 부모 box의 크기가 감소할 때, bias에 정해진 값보다 작아지려고 하는 경우 크기 감소를 거부한다
