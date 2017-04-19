Ext.define('Ext.locale.en.pivot.Aggregators', {
    override: 'Ext.pivot.Aggregators',

    customText:                 'Custom',
    sumText:                    'Sum',
    avgText:                    'Avg',
    countText:                  'Count',
    minText:                    'Min',
    maxText:                    'Max',
    groupSumPercentageText:     'Group sum percentage',
    groupCountPercentageText:   'Group count percentage',
    varianceText:               'Var',
    variancePText:              'Varp',
    stdDevText:                 'StdDev',
    stdDevPText:                'StdDevp'
});
Ext.define('Ext.locale.en.pivot.Grid', {
    override: 'Ext.pivot.Grid',

    textTotalTpl:       'Total ({name})',
    textGrandTotalTpl:  'Grand total'
});
Ext.define('Ext.locale.en.pivot.plugin.DrillDown', {
    override: 'Ext.pivot.plugin.DrillDown',

    titleText: 'Drill down',
    doneText: 'Done'
});
Ext.define('Ext.locale.en.pivot.plugin.configurator.Form', {
    override: 'Ext.pivot.plugin.configurator.Form',

    okText:                     'Ok',
    cancelText:                 'Cancel',
    formatText:                 'Format as',
    summarizeByText:            'Summarize by',
    customNameText:             'Custom name',
    sourceNameText:             'The source name for this field is "{form.dataIndex}"',
    sortText:                   'Sort',
    filterText:                 'Filter',
    sortResultsText:            'Sort results',
    alignText:                  'Align',
    alignLeftText:              'Left',
    alignCenterText:            'Center',
    alignRightText:             'Right',

    caseSensitiveText:          'Case sensitive',
    valueText:                  'Value',
    fromText:                   'From',
    toText:                     'To',
    labelFilterText:            'Show items for which the label',
    valueFilterText:            'Show items for which',
    top10FilterText:            'Show',

    sortAscText:                'Sort A to Z',
    sortDescText:               'Sort Z to A',
    sortClearText:              'Disable sorting',
    clearFilterText:            'Disable filtering',
    labelFiltersText:           'Label filters',
    valueFiltersText:           'Value filters',
    top10FiltersText:           'Top 10 filters',

    equalsLText:                'equals',
    doesNotEqualLText:          'does not equal',
    beginsWithLText:            'begins with',
    doesNotBeginWithLText:      'does not begin with',
    endsWithLText:              'ends with',
    doesNotEndWithLText:        'does not end with',
    containsLText:              'contains',
    doesNotContainLText:        'does not contain',
    greaterThanLText:           'is greater than',
    greaterThanOrEqualToLText:  'is greater than or equal to',
    lessThanLText:              'is less than',
    lessThanOrEqualToLText:     'is less than or equal to',
    betweenLText:               'is between',
    notBetweenLText:            'is not between',
    topOrderTopText:            'Top',
    topOrderBottomText:         'Bottom',
    topTypeItemsText:           'Items',
    topTypePercentText:         'Percent',
    topTypeSumText:             'Sum'
});Ext.define('Ext.locale.en.pivot.plugin.configurator.Panel', {
    override: 'Ext.pivot.plugin.configurator.Panel',

    panelTitle:             'Configuration',
    cancelText:             'Cancel',
    okText:                 'Done',

    panelAllFieldsText:     'Drop Unused Fields Here',
    panelTopFieldsText:     'Drop Column Fields Here',
    panelLeftFieldsText:    'Drop Row Fields Here',
    panelAggFieldsText:     'Drop Agg Fields Here',
    panelAllFieldsTitle:    'All fields',
    panelTopFieldsTitle:    'Column labels',
    panelLeftFieldsTitle:   'Row labels',
    panelAggFieldsTitle:    'Values'
});
Ext.define('Ext.locale.en.pivot.plugin.rangeeditor.Panel', {
    override: 'Ext.pivot.plugin.rangeeditor.Panel',

    titleText:      'Range editor',
    valueText:      'Value',
    fieldText:      'Source field is "{form.dataIndex}"',
    typeText:       'Type',
    okText:         'Ok',
    cancelText:     'Cancel'
});
