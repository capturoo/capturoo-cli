'use strict';
const columnify = require('columnify');

class DisplayUtils {
  /**
   * Returns pretty text output for showing a list of projects
   *
   * @param {Array} projects
   * @returns {String} console-ready text string
   */
  static displayProjectArray(projects) {
    if (projects.length === 0) {
      return 'There are currently no projects associated to this account.';
    }

    let data = projects.map(
      p => ({
        projectId: p.projectId,
        name: p.name,
        publicApiKey: p.publicApiKey,
        created: p.created
      })
    );

    return columnify(data, {
      columnSplitter: ' | ',
      showHeaders: true,
      columns: ['projectId', 'name', 'publicApiKey', 'created'],
      config: {
        projectId: {
          headingTransform: projectId => ('Project ID')
        },
        name: {
          headingTransform: heading => ('Project Name')
        },
        publicApiKey: {
          headingTransform: header => ('Public API Key')
        },
        created: {
          headingTransform: heading => ('Created')
        }
      }
    });
  }
}

module.exports = DisplayUtils;