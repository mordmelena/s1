/**
 * Populate the scene-graph with nodes,
 * calling methods form the scene-graph and node modules.
 * 
 * Texture files have to exist in the "textures" sub-directory.
 * 
 * @namespace cog1
 * @module createScene
 */
define(["exports", "scenegraph", "animation"], //
function(exports, scenegraph, animation) {
    "use strict";

	/**
	 * 	Call methods form the scene-graph (tree) module to create the scene.
	 *
	 */
	function init() {


		var sphere1 = scenegraph.createNodeWithModel("Sphere1", "sphere", {scale:100, recursionDepth:4});
		sphere1.translate([-700,200,0]);
		sphere1.rotateTo([0, 6.2, 0]);

		// sphere5.rotateTo([5.6, -3.87, 0]);
		// sphere.setVisible(true);
		// var insideOutPolyNode = scenegraph.createNodeWithModel("insideOutPoly", "insideOutPoly");
		// var diamondNode = scenegraph.createNodeWithModel("diamond", "diamond");

		var cubeNode1 = scenegraph.createNodeWithModel("cube1", "cube", {scale:100}, sphere1);
		cubeNode1.scale([2, 0, 0]);
		cubeNode1.rotateTo([1.6, -3.87, 0]);
		cubeNode1.translate([300,-260, 0]);

		var sphere2 = scenegraph.createNodeWithModel("Sphere2", "sphere", {scale:100, recursionDepth:4}, sphere1);
		sphere2.translate([590, -540, 0])
		// var keyNode = scenegraph.createNodeWithModel("key", "key", {scale:80});
		// keyNode.rotateTo([1.6, -3.87, 0]);
		// var line = scenegraph.createNodeWithModel("line", "line", {scale:200})
		// var cubeNode1 = scenegraph.createNodeWithModel("cube 1", "cube", {scale:70, textureURL:"stoneWall.jpg"});
		// cubeNode1.rotate([1,1,1]);
		// BEGIN exercise myModel
		var cubeNode2 = scenegraph.createNodeWithModel("cube2", "cube", {scale:100}, sphere2);
		cubeNode2.translate([200, 0, 0]);
		cubeNode2.rotateTo([0, 0, 0]);
		var sphere3 = scenegraph.createNodeWithModel("Sphere3", "sphere", {scale:100, recursionDepth:4}, sphere2);
		sphere3.translate([400, 0, 0]);

		var cubeNode3 = scenegraph.createNodeWithModel("cube3", "cube", {scale:50}, sphere3);
		cubeNode3.scale([0, -0.9, 0]);
		cubeNode3.translate([150, 0, 0]);
		// cubeNode3.rotateTo([0, 0, 0]);
		// END exercise myModel
		
		return;

		//var cubeNode = scenegraph.createNodeWithModel("cube", "cube", {scale:100, textureURL:"brickWall.jpg"});		
		var cubeNode1 = scenegraph.createNodeWithModel("cube 1", "cube", {scale:70, textureURL:"stoneWall.jpg"});
		cubeNode1.translate([50,200,0]);
		//cubeNode1.rotate([1,1,1]);
		var cubeNode2 = scenegraph.createNodeWithModel("cube 2", "cube", {scale:50, textureURL:"uvTest.jpg"});
		cubeNode2.translate([-100,-400,0]);
		//cubeNode2.rotate([-1,-1,-1]);
		var cubeNode3 = scenegraph.createNodeWithModel("cube procedural texture", "cube", {scale:50, textureURL:"sampleProceduralRGB"});
		var cubeNode4 = scenegraph.createNodeWithModel("cube six faces texture", "cube", {scale:200, textureURL:"OrbitCube.gif", sixFacesTexture:true});
		var cubeNode5 = scenegraph.createNodeWithModel("cube 3x3 texture", "cube", {scale:50, textureURL:"cubeColor.png", sixFacesTexture:true});
		var cubeNode6 = scenegraph.createNodeWithModel("cube Escher texture", "cube", {scale:200, textureURL:"EscherCubeFish.gif", sixFacesTexture:true});
		
		// var insideOutPolyNode = scenegraph.createNodeWithModel("insideOutPoly", "insideOutPoly");

		var diamondNode = scenegraph.createNodeWithModel("diamond", "diamond");

		var torusNode = scenegraph.createNodeWithModel("torus", "torus");
		var torusNode1 = scenegraph.createNodeWithModel("torus 13", "torus", {r2:50,n2:13,color:8});

		var teapotNode = scenegraph.createNodeWithModel("teapot", "teapot", {color:0, scale:40});
		var dirtyTeapotNode = scenegraph.createNodeWithModel("dirtyTeapot", "teapot_dirty", {color:8});
		//teapotNode.rotate([1,1,1]);
		
		var waltheadNode = scenegraph.createNodeWithModel("walthead", "walthead", {color:8});
		
		var plainNode1 = scenegraph.createNodeWithModel("plain", "plain", {scale:200, color:9, textureURL:"land_ocean_ice_2048.jpg"});		

		var emptyNode1 = scenegraph.createNodeWithModel("empty", "empty");		


        // BEGIN exercise Scenegraph		
		
		// Set parent-child relationships for scene-graph nodes.

        // END exercise Scenegraph		
        
        // Assign animations.
        // animation.assign(cubeNode, "move");
        // animation.assign(cubeNode1, "move");
        // animation.assign(cubeNode2, "rotate");
        
        // BEGIN exercise Rotating-Planet-Animation
        
        // Mind the the order of transformation types get mixed up
        // then traversing the hierarchy in the scene-graph.
        //
        // Animation of a Planet with an also rotation moon or a ring. 
        // The planet rotates around an small sun.        
        
        // END exercise Rotating-Planet-Animation

		 
		// Set visibility of nodes (hide: set to false).
		// Comment out what you want to see as the default is visible.
        // cubeNode.setVisible(false);
        cubeNode1.setVisible(false);
        cubeNode2.setVisible(false);
        cubeNode3.setVisible(false);
        cubeNode4.setVisible(false);
        cubeNode5.setVisible(false);
        cubeNode6.setVisible(false);
        insideOutPolyNode.setVisible(false);
        diamondNode.setVisible(false);
        torusNode.setVisible(false);
        torusNode1.setVisible(false);
        teapotNode.setVisible(false);
        dirtyTeapotNode.setVisible(false);
        waltheadNode.setVisible(false);
        plainNode1.setVisible(false);
        emptyNode1.setVisible(false);

        
		// Set the initially interactive node [by name].
		// If not set, it is the first node created.
		//scenegraph.setInteractiveNodeByName("sphere");
		//scenegraph.setInteractiveNode(torusNode);

		// Create a node for the light, which is not visible by default.
		var lightnode = scenegraph.createPointLightNode("light", "diamond");
				
		// Set light parameter.
		// ambientLI, pointLI, pointPos, specularLI, specularLIExpo
		scenegraph.setLights(0.5, 0.6, [200, 200, 300], 4.0, 10);
	}

	// Public API.
	exports.init = init;
});
