const About = () => {
    return (
        <article className="markdown-body">
            <h1 id="about-vakhas-blog">About Vakha’s Blog</h1>
                <p>이 블로그는 여러 기술들을 공부하고 적용해보고 싶어서 시작하게 되었습니다.<br/>
                기본적으로 BackEnd, FrontEnd 각각 별도의 구조로 잡고, <br/> 
                Maven을 통한 통합 빌드를 할수 있도록 목표를 잡고 블로그 개발을 시작했습니다.</p>
                <h3 id="적용-스택">적용 스택</h3>

                <table>
                <thead>
                <tr>
                <th>Component</th>
                <th>Technology</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td>Frontend</td>
                <td>React, Bootstrap, Next.js</td>
                </tr>
                <tr>
                <td>Backend</td>
                <td>Spring Boot, Java8</td>
                </tr>
                <tr>
                <td>Security</td>
                <td>Spring Security, JWT, Oauth2</td>
                </tr>
                <tr>
                <td>Database</td>
                <td>Mysql</td>
                </tr>
                <tr>
                <td>Persistence</td>
                <td>JPA</td>
                </tr>
                <tr>
                <td>Client Build</td>
                <td>npm, yarn, webpack</td>
                </tr>
                <tr>
                <td>Server Build</td>
                <td>Maven -> Gradle 변경예정</td>
                </tr>
                <tr>
                <td>IDE</td>
                <td>Intellij, Vscode</td>
                </tr>
                </tbody>
                </table><h3 id="section"></h3>
                <h3 id="그외...">그외…</h3>
                <ul>
                <li>제 DB는 Amazon RDS로 연결되어있습니다.</li>
                <li>Github 와 Jenkins를 연동하여 Jenkins를 통한 Maven 통합 빌드를 하도록 설정하였습니다.</li>
                <li>Jenkins 의 Slack Notification을 통해 빌드 결과를 Slack에 보고합니다.</li>
                </ul>
                <h3 id="History">History</h3>
                <p><strong>2019/2/1일</strong><br/>
                ServerSideRendering!!!<br/>
                사실 이번 블로그 프로젝트를 시작할때 SSR은 생각도 하지 않고있었습니다… ㅠ<br/>
                막상 아쉬운… Node - React조합에선 큰 작업없이 가능한것 같습니다… 후…<br/>
                하지만 SpringBoot - React 조합에서 SSR관련 문서가 많이 보이질 않네요…<br/>
                일단 Java8에 추가된 <strong>Nashorn</strong>을 생각하고있습니다. 기본 JDK에 내장된거라 아마 조금이라도 더 관련 자료가 많지 않을까 싶네요.</p><br/>
                2019/2/5일 .........<br/>
                Spring - React SSR 관련 5일의 삽질결과 .... React쪽은 Next.js 를 사용해야 할것 같다고 결론을 내렸습니다.<br />
                일단 통합빌드는 멈춰두고 두개의 프로젝트로 관리해야겠네요 ㅠㅠ.<br/>
                이기회에 Spring쪽 빌드도구를 Gradle로 바꾸고 CI는 Travice로 변경할 예정입니다...<br/>
                안그래도 AWS프리티어 사용하는데 두개 서버에다 젠킨스 서버까지 구동하면<br/> 아무리 저혼자 사용하는거라 해도 못버티지 싶네요.
                <h3 id="source">Source</h3>
                <p>본 블로그 소스는 Github에서 확인하실수 있습니다.<br/>
                <a href="https://github.com/vakhais/spring-boot-react-blog">https://github.com/vakhais/spring-boot-react-blog</a></p>
        </article>
    )
}

export default About;