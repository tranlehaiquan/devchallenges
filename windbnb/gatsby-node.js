/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const { createRemoteFileNode } = require(`gatsby-source-filesystem`);
exports.onCreateNode = async ({
  actions: { createNode },
  getCache,
  createNodeId,
  node,
}) => {
  // because onCreateNode is called for all nodes, verify that you are only running this code on nodes created by your plugin
  if (node.internal.type === 'StaysJson') {
    const fileNode = await createRemoteFileNode({
      // the url of the remote image to generate a node for
      url: node.photo,
      getCache,
      createNode,
      createNodeId,
      parentNodeId: node.id,
    });

    if (fileNode) {
      // with schemaCustomization: add a field `remoteImage` to your source plugin's node from the File node
      node.remoteImage = fileNode.id
      // OR with inference: link your source plugin's node to the File node without schemaCustomization like this, but creates a less sturdy schema
      node.remoteImage___NODE = fileNode.id
    }
  }
};
