import { BlogProvider } from "./BlogContext";
import { PostEdit } from "./PostEdit";
// import { Helmet } from "react-helmet";
import {
  Link,
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { PostManager } from "./PostManager";
import { PostPage } from "./PostPage";
import { Posts } from "./PostsPage";
import { theme } from "./theme";
import styled from "styled-components/macro";

const LinkStyled = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  transition: 200ms linear;
  :hover {
    opacity: 0.8;
  }
`;

const NavCmsLinks = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 50%;
  height: 3rem;
  border-bottom: ${theme.borderBasic};
`;

export const Blog = () => {
  return (
    <BlogProvider>
      <Router basename="/blog">
        {/* <Helmet>
          <title>CMS - ITA 2021</title>
        </Helmet> */}
        <NavCmsLinks>
          <LinkStyled to="/">Posts</LinkStyled>
          <LinkStyled to="/post/new">+ New Post</LinkStyled>
        </NavCmsLinks>
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
    </BlogProvider>
  );
};
