import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import "./Assets/Css/contact.css";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>jishnu</h2>
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              style={{ height: "250px" }}
            />
            <p style={{ width: "85%", margin: "auto", paddingTop: "1em" }}>
              asodfas;dlkhaskjvakljshdrifhaslkdjvnalksjdhf;asdkjva;sdf
              asdldkjafhlksjdvnaksjnvlawherltkjadsnlkvjahslhglzkjncva
              a;sjhflakjbsnvlkajewhgkjdsn ;vklajhw;okgnja sk;jfgha;kldsjgnv
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "20px", fontFamily: "Ubuntu" }}
                  >
                    <i clasName="fa fa-phone" aria-hidden="true" />
                    >(+91) 6282198875
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent icon="person">Aaron Paul</ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent icon="person">Bob Odenkirk</ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
