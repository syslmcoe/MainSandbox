// <b>PushToRedmine</b>
// <p>
// MKS ALM 2009 solution
// <p>
// Pushes the PTC Defect in External system : Redmine used by developers
// The trigger is called on rule : When (Type=Defect) && (Redmine=true)
// <p>
// Copyright 2019 by Magna. All rights reserved.
//



function print(s)
{
    java.lang.System.out.println(s);
}


///START
eb = bsf.lookupBean("siEnvironmentBean");
eb.setMessageCategory("MKSALM");

sb = bsf.lookupBean("imServerBean");
delta = bsf.lookupBean("imIssueDeltaBean");

print("Issue ID " + delta.getID());
print("Issue Summary " + delta.getNewSummary());
print("Issue Description " + delta.getNewFieldDisplayString("Description"));
print("Event Name " + eb.getEventName());
print("Event ID " + eb.getEventID());
print("Event Type " + eb.getEventType());
print("Event Context " + eb.getEventContext());

var rest = new Packages.com.magna.alm.java.rest.util.RestUtil();
var result = rest.createRedmineIssue(delta.getID(),delta.getNewSummary(),delta.getNewFieldDisplayString("Description"));

print("After rest call"+result);



