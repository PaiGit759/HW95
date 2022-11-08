import ReactDOM from "react-dom";
import { Grid, Row, Col } from "react-flexbox-grid";
import { UsersList } from "./users";
import "./styles.css";

function App(_props) {
  return (
    <Grid>
      <Row center="xs">
        <Col xs={12}>
          <div
            style={{
              backgroundColor: "beige",
              width: "100%",
              paddingTop: "10px",
              paddingBottom: "10px"
            }}
          >
            <div style={{ margin: "25px" }}>
              <UsersList />
            </div>
          </div>
        </Col>
      </Row>
    </Grid>
  );
}

ReactDOM.render(<App />, document.getElementById("container"));
