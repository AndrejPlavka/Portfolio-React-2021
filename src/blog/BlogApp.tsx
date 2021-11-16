import { BlogProvider } from "./BlogContext";
import {
  Link,
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { PostEdit } from "./PostEdit";
import { PostManager } from "./PostManager";
import { PostPage } from "./PostPage";
import { Posts } from "./PostsPage";
import { theme as blog } from "./theme";

// Styles:
import { theme } from "../GlobalStyles";
import styled, { keyframes } from "styled-components/macro";

// Styled components:
const fadeIn = keyframes`
0% {opacity: 0}
100% {opacity: 1}
`;

const DivMain = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  animation: 1s ${fadeIn} forwards;
`;

const DivContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  padding: 5em 3em;
`;

const NavLinks = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 0 0 2em;
  border-bottom: ${blog.borderBasic};
  text-transform: uppercase;
  a:visited {
    color: ${blog.visitedPrimary};
  }
  @media screen and (${theme.sx_min_425}) {
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    border-bottom: ${blog.borderBasic};
    text-transform: uppercase;
  }
`;

const LinkStyled = styled(Link)`
  display: flex;
  padding: 0.25em 0;
  font-size: 2em;
  font-weight: 300;
  text-decoration: none;
  transition: 100ms linear;
  :hover {
    opacity: 0.5;
  }
`;
export const Blog = () => {
  return (
    <DivMain>
      <BlogProvider>
        <DivContent>
          <Router basename="/blog">
            <NavLinks>
              <LinkStyled to="/">Posts</LinkStyled>
              <LinkStyled to="/post/new">+ New Post</LinkStyled>
            </NavLinks>
            <Switch>
              <Route exact path="/">
                <Posts />
              </Route>
              <Route exact path="/post/new">
                <PostManager />
              </Route>
              <Route path="/post/edit/:slug">
                <PostEdit />
              </Route>
              <Route path="/post/:slug">
                <PostPage />
              </Route>
              <Route>
                <Redirect to="/" />
              </Route>
            </Switch>
          </Router>
        </DivContent>
      </BlogProvider>
    </DivMain>
  );
};
