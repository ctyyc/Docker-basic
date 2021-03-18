# Docker-basic
## Docker-basic Command
<hr/>

    docker run <Image Name/ Container Id>
: 실행 (create + start)

    docker ps
: 실행중인 컨테이너를 나열

    docker create <Image Name/ Container Id>
: 컨테이너 생성

    docker start -a <Image Name/ Container Id>
: 컨테이너 실행 (-a 옵션은 attach 줄임말, 실행된 컨테이너의 내용을 표출)

    docker stop <Image Name/ Container Id>
: (진행중인 작업까지는 완료 후) 컨테이너 중지

    docker kill <Image Name/ Container Id>
: 즉시 컨테이너 중지

    docker rm <Image Name/ Container Id>
: (중지된) 컨테이너 삭제

    docker rmi <Image Id>
: 이미지 삭제

    docker system prune
: 실행중인 컨테이너에 영향을 주지 않으면서, 실행하지 않는 모든 자원 삭제

    docker exec -it <Container Id> <명령어>
: 이미 실행중인 컨테이너에 명령어 전달 (-it 옵션은 계속 명령어를 전달할 수 있도록 함)

    docker exec -it <Container Id> sh
: 이미 실행중인 컨테이너에 접속 (종료 시 Ctrl + D)

<br/>
<hr/>

    docker build ./<파일경로>
: 해당 디렉토리 내에 dockerfile을 도커 클라이언트에 전달

    docker build -t <Docker ID>/<Image Name>:<Version> ./<파일경로>
: 해당 계정의 이미지 이름으로 전달

    docker run -p <browser port>:<container port> <Image Name>
: 브라우저 port를 컨테이너 port와 연결하기

    docker run -p <browser port>:<container port> -v /usr/src/app/node_modules -v %cd%:/usr/src/app <Image Name>
: Volume을 사용해서 어플리케이션 실행, pwd(windows: cd)는 현재 작업중인 디렉토리

<br/>
<hr/>

    <docker-compose> up -d --build
: compose 실행 (-d 옵션은 백그라운드에서 컨테이너 실행, --build 옵션은 다시 빌드하는 옵션)

    <docker-compose> down
: compose 중지
