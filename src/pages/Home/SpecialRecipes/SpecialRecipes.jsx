import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const SpecialRecipes = () => {
  return (
    <div className='text-center mt-5'>
      <h2 className='fw-bold'>Our Special Recipes</h2>
      <CardGroup className='g-4'>
        <Card>
          <Card.Img
            className='my-2 mx-auto w-50 px-2 rounded-pill'
            variant='top'
            src={
              "https://media.istockphoto.com/id/481765835/photo/homemade-italian-bruschetta-appetizer.jpg?s=1024x1024&w=is&k=20&c=SfHpZR2YSRtyx-tYEG-SrAZWG-lNWq-IWREzPy1mx7w="
            }
          />
          <Card.Body>
            <Card.Title>Balsamic Bruschetta</Card.Title>
            <Card.Text>
              Bruschetta is a classic Italian appetizer that is easy to make at
              home. Toasted bread is topped with tomatoes, Parmesan cheese,
              garlic, and fresh basil. Use a high-quality balsamic vinegar for
              best results.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            className='my-2 mx-auto w-50 px-2 rounded-pill'
            variant='top'
            src={
              "https://www.allrecipes.com/thmb/zxruda8AGFS5ZAMLQVoMjkYzrxc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/51535-fresh-southern-peach-cobbler-ddmfs-0652-3x4-cb8d3d5a1e8548728fa1fc3d21fec1f0.jpg"
            }
          />
          <Card.Body>
            <Card.Title>Fresh Southern Peach Cobbler</Card.Title>
            <Card.Text>
              This peach cobbler recipe is something I've perfected over the
              years. It's loved by all. Use fresh Georgia peaches, of course!{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>Last updated 5 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            className='my-2 mx-auto w-50 px-2 rounded-pill'
            variant='top'
            src={
              "https://www.allrecipes.com/thmb/0jDrrCOm9Kxc1w0O1cHJRhY0fc8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/162760_Fluffy-Pancakes_Hannah-Culbertson_4x3-3d10e526671340f58667202d002bf1e4.jpg"
            }
          />
          <Card.Body>
            <Card.Title>Fluffy Pancakes</Card.Title>
            <Card.Text>
              Need a fluffy pancake recipe? This one is just right, especially
              when there's plenty of butter and syrup. Make it extra special
              with berries and cream!
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
};

export default SpecialRecipes;
