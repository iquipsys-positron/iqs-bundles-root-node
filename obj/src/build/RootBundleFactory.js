"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_facade_node_1 = require("pip-services3-facade-node");
const pip_services3_container_node_1 = require("pip-services3-container-node");
// import { LoggingServiceFactory } from 'pip-services-logging-node';
const pip_clients_logging_node_1 = require("pip-clients-logging-node");
// import { PerfMonServiceFactory } from 'pip-services-perfmon-node';
const pip_clients_perfmon_node_1 = require("pip-clients-perfmon-node");
const pip_services_eventlog_node_1 = require("pip-services-eventlog-node");
const pip_clients_eventlog_node_1 = require("pip-clients-eventlog-node");
// import { StatisticsServiceFactory } from 'pip-services-statistics-node';
const pip_clients_statistics_node_1 = require("pip-clients-statistics-node");
const pip_services_settings_node_1 = require("pip-services-settings-node");
const pip_clients_settings_node_1 = require("pip-clients-settings-node");
const pip_services_activities_node_1 = require("pip-services-activities-node");
const pip_clients_activities_node_1 = require("pip-clients-activities-node");
const pip_services_accounts_node_1 = require("pip-services-accounts-node");
const pip_clients_accounts_node_1 = require("pip-clients-accounts-node");
const pip_services_email_node_1 = require("pip-services-email-node");
const pip_clients_email_node_1 = require("pip-clients-email-node");
const pip_services_sms_node_1 = require("pip-services-sms-node");
const pip_clients_sms_node_1 = require("pip-clients-sms-node");
const pip_services_emailsettings_node_1 = require("pip-services-emailsettings-node");
const pip_clients_emailsettings_node_1 = require("pip-clients-emailsettings-node");
const pip_services_smssettings_node_1 = require("pip-services-smssettings-node");
const pip_clients_smssettings_node_1 = require("pip-clients-smssettings-node");
const pip_services_msgdistribution_node_1 = require("pip-services-msgdistribution-node");
const pip_clients_msgdistribution_node_1 = require("pip-clients-msgdistribution-node");
const pip_services_passwords_node_1 = require("pip-services-passwords-node");
const pip_clients_passwords_node_1 = require("pip-clients-passwords-node");
const pip_services_sessions_node_1 = require("pip-services-sessions-node");
const pip_clients_sessions_node_1 = require("pip-clients-sessions-node");
const pip_services_roles_node_1 = require("pip-services-roles-node");
const pip_clients_roles_node_1 = require("pip-clients-roles-node");
const pip_services_blobs_node_1 = require("pip-services-blobs-node");
const pip_clients_blobs_node_1 = require("pip-clients-blobs-node");
const pip_services_attachments_node_1 = require("pip-services-attachments-node");
const pip_clients_attachments_node_1 = require("pip-clients-attachments-node");
const pip_services_applications_node_1 = require("pip-services-applications-node");
const pip_clients_applications_node_1 = require("pip-clients-applications-node");
const pip_services_tips_node_1 = require("pip-services-tips-node");
const pip_clients_tips_node_1 = require("pip-clients-tips-node");
const pip_services_guides_node_1 = require("pip-services-guides-node");
const pip_clients_guides_node_1 = require("pip-clients-guides-node");
const pip_services_help_node_1 = require("pip-services-help-node");
const pip_clients_help_node_1 = require("pip-clients-help-node");
const pip_services_imagesets_node_1 = require("pip-services-imagesets-node");
const pip_clients_imagesets_node_1 = require("pip-clients-imagesets-node");
const pip_services_dashboards_node_1 = require("pip-services-dashboards-node");
const pip_clients_dashboards_node_1 = require("pip-clients-dashboards-node");
const pip_services_msgtemplates_node_1 = require("pip-services-msgtemplates-node");
const pip_clients_msgtemplates_node_1 = require("pip-clients-msgtemplates-node");
const pip_services_announcements_node_1 = require("pip-services-announcements-node");
const pip_clients_announcements_node_1 = require("pip-clients-announcements-node");
const pip_services_feedbacks_node_1 = require("pip-services-feedbacks-node");
const pip_clients_feedbacks_node_1 = require("pip-clients-feedbacks-node");
const pip_services_creditcards_node_1 = require("pip-services-creditcards-node");
const pip_clients_creditcards_node_1 = require("pip-clients-creditcards-node");
const pip_services_clusters_node_1 = require("pip-services-clusters-node");
const pip_clients_clusters_node_1 = require("pip-clients-clusters-node");
const pip_services_organizations_node_1 = require("pip-services-organizations-node");
const pip_clients_organizations_node_1 = require("pip-clients-organizations-node");
const iqs_services_agreements_node_1 = require("iqs-services-agreements-node");
const iqs_clients_agreements_node_1 = require("iqs-clients-agreements-node");
const iqs_services_objectgroups_node_1 = require("iqs-services-objectgroups-node");
const iqs_clients_objectgroups_node_1 = require("iqs-clients-objectgroups-node");
const iqs_services_locations_node_1 = require("iqs-services-locations-node");
const iqs_clients_locations_node_1 = require("iqs-clients-locations-node");
const iqs_services_controlobjects_node_1 = require("iqs-services-controlobjects-node");
const iqs_clients_controlobjects_node_1 = require("iqs-clients-controlobjects-node");
const iqs_services_dataprofiles_node_1 = require("iqs-services-dataprofiles-node");
const iqs_clients_dataprofiles_node_1 = require("iqs-clients-dataprofiles-node");
const iqs_services_deviceprofiles_node_1 = require("iqs-services-deviceprofiles-node");
const iqs_clients_deviceprofiles_node_1 = require("iqs-clients-deviceprofiles-node");
const iqs_services_deviceconfigs_node_1 = require("iqs-services-deviceconfigs-node");
const iqs_clients_deviceconfigs_node_1 = require("iqs-clients-deviceconfigs-node");
const iqs_services_devices_node_1 = require("iqs-services-devices-node");
const iqs_clients_devices_node_1 = require("iqs-clients-devices-node");
const iqs_services_eventtemplates_node_1 = require("iqs-services-eventtemplates-node");
const iqs_clients_eventtemplates_node_1 = require("iqs-clients-eventtemplates-node");
const iqs_services_resolutions_node_1 = require("iqs-services-resolutions-node");
const iqs_clients_resolutions_node_1 = require("iqs-clients-resolutions-node");
const iqs_services_gateways_node_1 = require("iqs-services-gateways-node");
const iqs_clients_gateways_node_1 = require("iqs-clients-gateways-node");
const iqs_services_zones_node_1 = require("iqs-services-zones-node");
const iqs_clients_zones_node_1 = require("iqs-clients-zones-node");
const pip_services_beacons_node_1 = require("pip-services-beacons-node");
const pip_clients_beacons_node_1 = require("pip-clients-beacons-node");
const iqs_services_eventrules_node_1 = require("iqs-services-eventrules-node");
const iqs_clients_eventrules_node_1 = require("iqs-clients-eventrules-node");
const iqs_services_shifts_node_1 = require("iqs-services-shifts-node");
const iqs_clients_shifts_node_1 = require("iqs-clients-shifts-node");
const iqs_services_emergencyplans_node_1 = require("iqs-services-emergencyplans-node");
const iqs_clients_emergencyplans_node_1 = require("iqs-clients-emergencyplans-node");
const pip_services_invitations_node_1 = require("pip-services-invitations-node");
const pip_clients_invitations_node_1 = require("pip-clients-invitations-node");
const pip_services_orgroles_node_1 = require("pip-services-orgroles-node");
const pip_clients_orgroles_node_1 = require("pip-clients-orgroles-node");
// import { CurrentObjectStatesServiceFactory } from 'iqs-services-currobjectstates-node';
const iqs_clients_currobjectstates_node_1 = require("iqs-clients-currobjectstates-node");
// import { CurrentDeviceStatesServiceFactory } from 'iqs-services-currdevicestates-node';
const iqs_clients_currdevicestates_node_1 = require("iqs-clients-currdevicestates-node");
// import { RostersServiceFactory } from 'iqs-services-rosters-node';
const iqs_clients_rosters_node_1 = require("iqs-clients-rosters-node");
// import { SignalsServiceFactory } from 'iqs-services-signals-node';
const iqs_clients_signals_node_1 = require("iqs-clients-signals-node");
// import { CorrectionsServiceFactory } from 'iqs-services-corrections-node';
const iqs_clients_corrections_node_1 = require("iqs-clients-corrections-node");
// import { EventGenerationServiceFactory } from 'iqs-services-eventgeneration-node';
const iqs_clients_eventgeneration_node_1 = require("iqs-clients-eventgeneration-node");
// import { RouteAnalysisServiceFactory } from 'pip-services-routeanalysis-node';
const pip_clients_routeanalysis_node_1 = require("pip-clients-routeanalysis-node");
// import { StateUpdatesServiceFactory } from 'iqs-services-stateupdates-node';
const iqs_clients_stateupdates_node_1 = require("iqs-clients-stateupdates-node");
// import { RestGatewayServiceFactory } from 'iqs-services-restgateway-node';
const iqs_clients_restgateway_node_1 = require("iqs-clients-restgateway-node");
// import { MqttGatewayServiceFactory } from 'iqs-services-mqttgateway-node';
const iqs_clients_mqttgateway_node_1 = require("iqs-clients-mqttgateway-node");
// import { TeltonikaGatewayServiceFactory } from 'iqs-services-teltonikagateway-node';
// import { OperationalEventsServiceFactory } from 'iqs-services-opevents-node';
const iqs_clients_opevents_node_1 = require("iqs-clients-opevents-node");
// import { IncidentsServiceFactory } from 'iqs-services-incidents-node';
const iqs_clients_incidents_node_1 = require("iqs-clients-incidents-node");
// import { TransducerDataServiceFactory } from 'pip-services-transducerdata-node';
const pip_clients_transducerdata_node_1 = require("pip-clients-transducerdata-node");
// import { PositionsServiceFactory } from 'pip-services-positions-node';
const pip_clients_positions_node_1 = require("pip-clients-positions-node");
// import { ObjectStatesServiceFactory } from 'iqs-services-objectstates-node';
const iqs_clients_objectstates_node_1 = require("iqs-clients-objectstates-node");
// import { RoutesServiceFactory } from 'pip-services-routes-node';
const pip_clients_routes_node_1 = require("pip-clients-routes-node");
// import { AttendanceServiceFactory } from 'iqs-services-attendance-node';
const iqs_clients_attendance_node_1 = require("iqs-clients-attendance-node");
const iqs_clients_statistics_node_1 = require("iqs-clients-statistics-node");
const iqs_services_cloudwatch_node_1 = require("iqs-services-cloudwatch-node");
const iqs_clients_cloudwatch_node_1 = require("iqs-clients-cloudwatch-node");
const pip_facade_infrastructure_node_1 = require("pip-facade-infrastructure-node");
const pip_facade_users_node_1 = require("pip-facade-users-node");
const pip_facade_content_node_1 = require("pip-facade-content-node");
const pip_facade_support_node_1 = require("pip-facade-support-node");
const pip_facade_ecommerce_node_1 = require("pip-facade-ecommerce-node");
const RootBundleServiceFactory_1 = require("./RootBundleServiceFactory");
class RootBundleFactory extends pip_services3_container_node_1.DefaultContainerFactory {
    constructor() {
        super();
        this.add(new pip_services3_facade_node_1.FacadeFactory);
        this.add(new pip_facade_infrastructure_node_1.InfrastructureFacadeFactory);
        this.add(new pip_facade_users_node_1.UsersFacadeFactory);
        this.add(new pip_facade_content_node_1.ContentFacadeFactory);
        this.add(new pip_facade_support_node_1.SupportFacadeFactory);
        this.add(new pip_facade_ecommerce_node_1.ECommerceFacadeFactory);
        this.add(new RootBundleServiceFactory_1.RootBundleServiceFactory());
        // this.add(new LoggingServiceFactory);
        this.add(new pip_clients_logging_node_1.LoggingClientFactory);
        // this.add(new PerfMonServiceFactory);
        this.add(new pip_clients_perfmon_node_1.PerfMonClientFactory);
        this.add(new pip_services_eventlog_node_1.EventLogServiceFactory);
        this.add(new pip_clients_eventlog_node_1.EventLogClientFactory);
        // this.add(new StatisticsServiceFactory);
        this.add(new pip_clients_statistics_node_1.StatisticsClientFactory);
        this.add(new pip_services_settings_node_1.SettingsServiceFactory);
        this.add(new pip_clients_settings_node_1.SettingsClientFactory);
        this.add(new pip_services_activities_node_1.ActivitiesServiceFactory);
        this.add(new pip_clients_activities_node_1.ActivitiesClientFactory);
        this.add(new pip_services_accounts_node_1.AccountsServiceFactory);
        this.add(new pip_clients_accounts_node_1.AccountsClientFactory);
        this.add(new pip_services_email_node_1.EmailServiceFactory);
        this.add(new pip_clients_email_node_1.EmailClientFactory);
        this.add(new pip_services_sms_node_1.SmsServiceFactory);
        this.add(new pip_clients_sms_node_1.SmsClientFactory);
        this.add(new pip_services_emailsettings_node_1.EmailSettingsServiceFactory);
        this.add(new pip_clients_emailsettings_node_1.EmailSettingsClientFactory);
        this.add(new pip_services_smssettings_node_1.SmsSettingsServiceFactory);
        this.add(new pip_clients_smssettings_node_1.SmsSettingsClientFactory);
        this.add(new pip_services_msgdistribution_node_1.MessageDistributionServiceFactory);
        this.add(new pip_clients_msgdistribution_node_1.MessageDistributionClientFactory);
        this.add(new pip_services_passwords_node_1.PasswordsServiceFactory);
        this.add(new pip_clients_passwords_node_1.PasswordsClientFactory);
        this.add(new pip_services_sessions_node_1.SessionsServiceFactory);
        this.add(new pip_clients_sessions_node_1.SessionsClientFactory);
        this.add(new pip_services_roles_node_1.RolesServiceFactory);
        this.add(new pip_clients_roles_node_1.RolesClientFactory);
        this.add(new pip_services_blobs_node_1.BlobsServiceFactory);
        this.add(new pip_clients_blobs_node_1.BlobsClientFactory);
        this.add(new pip_services_attachments_node_1.AttachmentsServiceFactory);
        this.add(new pip_clients_attachments_node_1.AttachmentsClientFactory);
        this.add(new pip_services_applications_node_1.ApplicationsServiceFactory);
        this.add(new pip_clients_applications_node_1.ApplicationsClientFactory);
        this.add(new pip_services_tips_node_1.TipsServiceFactory);
        this.add(new pip_clients_tips_node_1.TipsClientFactory);
        this.add(new pip_services_guides_node_1.GuidesServiceFactory);
        this.add(new pip_clients_guides_node_1.GuidesClientFactory);
        this.add(new pip_services_help_node_1.HelpServiceFactory);
        this.add(new pip_clients_help_node_1.HelpClientFactory);
        this.add(new pip_services_imagesets_node_1.ImageSetsServiceFactory);
        this.add(new pip_clients_imagesets_node_1.ImageSetsClientFactory);
        this.add(new pip_services_dashboards_node_1.DashboardsServiceFactory);
        this.add(new pip_clients_dashboards_node_1.DashboardsClientFactory);
        this.add(new pip_services_msgtemplates_node_1.MessageTemplatesServiceFactory);
        this.add(new pip_clients_msgtemplates_node_1.MessageTemplatesClientFactory);
        this.add(new pip_services_announcements_node_1.AnnouncementsServiceFactory);
        this.add(new pip_clients_announcements_node_1.AnnouncementsClientFactory);
        this.add(new pip_services_feedbacks_node_1.FeedbacksServiceFactory);
        this.add(new pip_clients_feedbacks_node_1.FeedbacksClientFactory);
        this.add(new pip_services_creditcards_node_1.CreditCardsServiceFactory);
        this.add(new pip_clients_creditcards_node_1.CreditCardsClientFactory);
        this.add(new pip_services_clusters_node_1.ClustersServiceFactory);
        this.add(new pip_clients_clusters_node_1.ClustersClientFactory);
        this.add(new pip_services_organizations_node_1.OrganizationsServiceFactory);
        this.add(new pip_clients_organizations_node_1.OrganizationsClientFactory);
        this.add(new iqs_services_agreements_node_1.ServiceAgreementsServiceFactory);
        this.add(new iqs_clients_agreements_node_1.ServiceAgreementsClientFactory);
        this.add(new iqs_services_locations_node_1.LocationsServiceFactory);
        this.add(new iqs_clients_locations_node_1.LocationsClientFactory);
        this.add(new iqs_services_objectgroups_node_1.ObjectGroupsServiceFactory);
        this.add(new iqs_clients_objectgroups_node_1.ObjectGroupsClientFactory);
        this.add(new iqs_services_controlobjects_node_1.ControlObjectsServiceFactory);
        this.add(new iqs_clients_controlobjects_node_1.ControlObjectsClientFactory);
        this.add(new iqs_services_dataprofiles_node_1.DataProfilesServiceFactory);
        this.add(new iqs_clients_dataprofiles_node_1.DataProfilesClientFactory);
        this.add(new iqs_services_deviceprofiles_node_1.DeviceProfilesServiceFactory);
        this.add(new iqs_clients_deviceprofiles_node_1.DeviceProfilesClientFactory);
        this.add(new iqs_services_deviceconfigs_node_1.DeviceConfigsServiceFactory);
        this.add(new iqs_clients_deviceconfigs_node_1.DeviceConfigsClientFactory);
        this.add(new iqs_services_devices_node_1.DevicesServiceFactory);
        this.add(new iqs_clients_devices_node_1.DevicesClientFactory);
        this.add(new iqs_services_eventtemplates_node_1.EventTemplatesServiceFactory);
        this.add(new iqs_clients_eventtemplates_node_1.EventTemplatesClientFactory);
        this.add(new iqs_services_resolutions_node_1.ResolutionsServiceFactory);
        this.add(new iqs_clients_resolutions_node_1.ResolutionsClientFactory);
        this.add(new iqs_services_gateways_node_1.GatewaysServiceFactory);
        this.add(new iqs_clients_gateways_node_1.GatewaysClientFactory);
        this.add(new iqs_services_zones_node_1.ZonesServiceFactory);
        this.add(new iqs_clients_zones_node_1.ZonesClientFactory);
        this.add(new pip_services_beacons_node_1.BeaconsServiceFactory);
        this.add(new pip_clients_beacons_node_1.BeaconsClientFactory);
        this.add(new iqs_services_eventrules_node_1.EventRulesServiceFactory);
        this.add(new iqs_clients_eventrules_node_1.EventRulesClientFactory);
        this.add(new iqs_services_shifts_node_1.ShiftsServiceFactory);
        this.add(new iqs_clients_shifts_node_1.ShiftsClientFactory);
        this.add(new iqs_services_emergencyplans_node_1.EmergencyPlansServiceFactory);
        this.add(new iqs_clients_emergencyplans_node_1.EmergencyPlansClientFactory);
        this.add(new pip_services_invitations_node_1.InvitationsServiceFactory);
        this.add(new pip_clients_invitations_node_1.InvitationsClientFactory);
        this.add(new pip_services_orgroles_node_1.OrgRolesServiceFactory);
        this.add(new pip_clients_orgroles_node_1.OrgRolesClientFactory);
        // this.add(new CurrentObjectStatesServiceFactory);
        this.add(new iqs_clients_currobjectstates_node_1.CurrentObjectStatesClientFactory);
        // this.add(new CurrentDeviceStatesServiceFactory);
        this.add(new iqs_clients_currdevicestates_node_1.CurrentDeviceStatesClientFactory);
        // this.add(new IncidentsServiceFactory);
        this.add(new iqs_clients_incidents_node_1.IncidentsClientFactory);
        // this.add(new RostersServiceFactory);
        this.add(new iqs_clients_rosters_node_1.RostersClientFactory);
        // this.add(new SignalsServiceFactory);
        this.add(new iqs_clients_signals_node_1.SignalsClientFactory);
        // this.add(new CorrectionsServiceFactory);
        this.add(new iqs_clients_corrections_node_1.CorrectionsClientFactory);
        // this.add(new EventGenerationServiceFactory);
        this.add(new iqs_clients_eventgeneration_node_1.EventGenerationClientFactory);
        // this.add(new RouteAnalysisServiceFactory);
        this.add(new pip_clients_routeanalysis_node_1.RouteAnalysisClientFactory);
        // this.add(new StateUpdatesServiceFactory);
        this.add(new iqs_clients_stateupdates_node_1.StateUpdatesClientFactory);
        // this.add(new RestGatewayServiceFactory);
        this.add(new iqs_clients_restgateway_node_1.RestGatewayClientFactory);
        // this.add(new MqttGatewayServiceFactory());
        this.add(new iqs_clients_mqttgateway_node_1.MqttGatewayClientFactory);
        // this.add(new TeltonikaGatewayServiceFactory());
        // this.add(new OperationalEventsServiceFactory);
        this.add(new iqs_clients_opevents_node_1.OperationalEventsClientFactory);
        // this.add(new TransducerDataServiceFactory);
        this.add(new pip_clients_transducerdata_node_1.TransducerDataClientFactory);
        // this.add(new PositionsServiceFactory);
        this.add(new pip_clients_positions_node_1.PositionsClientFactory);
        // this.add(new ObjectStatesServiceFactory);
        this.add(new iqs_clients_objectstates_node_1.ObjectStatesClientFactory);
        // this.add(new RoutesServiceFactory);
        this.add(new pip_clients_routes_node_1.RoutesClientFactory);
        // this.add(new AttendanceServiceFactory);
        this.add(new iqs_clients_attendance_node_1.AttendanceClientFactory);
        this.add(new iqs_clients_statistics_node_1.StatisticsClientFactory);
        this.add(new iqs_services_cloudwatch_node_1.CloudwatchServiceFactory);
        this.add(new iqs_clients_cloudwatch_node_1.CloudwatchClientFactory);
    }
}
exports.RootBundleFactory = RootBundleFactory;
//# sourceMappingURL=RootBundleFactory.js.map